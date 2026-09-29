import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamHero from "../components/Team/TeamHero";
import { getTeamMembers } from "../api/team";
import type { TeamMember } from "../types/team";

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await getTeamMembers();
        setTeam(data);
      } catch (err) {
        setError("Unable to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadTeam();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <TeamHero team={team} loading={loading} error={error} />
      </main>

      <Footer />
    </>
  );
};

export default Team;
