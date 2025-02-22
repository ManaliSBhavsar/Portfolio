import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MetaTagsProps {
  title: string;
  description: string;
}

const MetaTags = ({ title, description } : MetaTagsProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = description;
    }
  }, [location, title, description]);

  return null;
};

export default MetaTags
