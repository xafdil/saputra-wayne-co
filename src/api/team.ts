import type { TeamMember } from "../types/team";

const TEAM_STORAGE_KEY = "saputraWayneTeam";
const TEAM_VERSION = "v6";

interface RandomUser {
  login: {
    uuid: string;
  };
  picture: {
    large: string;
  };
}

interface RandomUserResponse {
  results: RandomUser[];
}

const teamProfiles = [
  {
    name: "Richard Grayson",
    role: "Managing Partner",
    gender: "male",
    bio: "Leads long-term investment strategy and works closely with founders building enduring companies.",
  },
  {
    name: "Clark Goldberg",
    role: "Investment Director",
    gender: "male",
    bio: "Focuses on portfolio growth, fundraising strategy, and business development initiatives.",
  },
  {
    name: "Victoria Secreto",
    role: "Portfolio Advisor",
    gender: "female",
    bio: "Supports founders through operational scaling and strategic partnerships.",
  },
  {
    name: "Ahamed Weinberg",
    role: "Growth Partner",
    gender: "male",
    bio: "Builds relationships with entrepreneurs and identifies emerging investment opportunities.",
  },
  {
    name: "William Butcher",
    role: "Investment Associate",
    gender: "male",
    bio: "Researches markets and evaluates companies across technology and sustainable industries.",
  },
  {
    name: "Annie January",
    role: "Operations Manager",
    gender: "female",
    bio: "Coordinates portfolio operations and investor relations across multiple sectors.",
  },
  {
    name: "Marshall Mathers",
    role: "Strategy Consultant",
    gender: "male",
    bio: "Provides strategic insight on expansion, governance, and organizational growth.",
  },
  {
    name: "Michael Olise",
    role: "Research Analyst",
    gender: "male",
    bio: "Analyzes trends, industries, and investment opportunities to support informed decisions.",
  },
];

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const savedTeam = localStorage.getItem(TEAM_STORAGE_KEY);

  if (savedTeam) {
    const parsedTeam = JSON.parse(savedTeam);

    if (parsedTeam.version === TEAM_VERSION) {
      return parsedTeam.team;
    }
  }

  const team: TeamMember[] = [];

  for (const profile of teamProfiles) {
    const response = await fetch(
      `https://randomuser.me/api/?gender=${profile.gender}&nat=us,gb,au`,
    );

    if (!response.ok) {
      throw new Error("Unable to load team members.");
    }

    const data: RandomUserResponse = await response.json();
    const user = data.results[0];

    team.push({
      id: user.login.uuid,
      name: profile.name,
      role: profile.role,
      bio: profile.bio,
      photo: user.picture.large,
    });
  }

  localStorage.setItem(
    TEAM_STORAGE_KEY,
    JSON.stringify({
      version: TEAM_VERSION,
      team,
    }),
  );

  return team;
};
