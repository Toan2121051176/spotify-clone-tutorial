import { SVGProps } from "react";

interface Props {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  label: string;
}

const IconButton = ({ icon: Icon, label }: Props) => {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
};

export default IconButton;
