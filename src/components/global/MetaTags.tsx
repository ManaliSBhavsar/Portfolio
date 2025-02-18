import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MetaTags = ({ title, description }: { title: string, description: string }) => {
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
