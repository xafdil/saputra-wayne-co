type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const TestimonialCard = ({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-3xl text-gray-300">“</div>

      <p className="mt-4 leading-7 text-gray-600">{quote}</p>

      <div className="mt-8 border-t border-gray-100 pt-6">
        <p className="font-medium text-black">{name}</p>

        <p className="mt-1 text-sm text-gray-500">
          {role}, {company}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
