type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
};

const ServiceCard = ({
  number,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="text-sm font-medium text-gray-400">
        {number}
      </span>

      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-black">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <a
        href="/services"
        className="mt-8 inline-block text-sm font-medium text-black transition-opacity hover:opacity-60"
      >
        Explore service →
      </a>
    </article>
  );
};

export default ServiceCard;