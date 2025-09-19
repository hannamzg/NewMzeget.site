import { Link } from 'react-router-dom';

const ProjectCard = ({ 
  project, 
  showDescription = true, 
  showPrice = false,
  className = "" 
}) => {
  const {
    id,
    title,
    description,
    image,
    category,
    style,
    materials,
    dimensions,
    price,
    features = []
  } = project;

  return (
    <div className={`card overflow-hidden group hover:shadow-medium transition-all duration-300 ${className}`}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        <div className="absolute top-4 right-4">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;
