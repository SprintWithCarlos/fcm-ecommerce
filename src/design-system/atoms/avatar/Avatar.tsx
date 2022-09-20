import "./avatar.sass";

export enum StatusOptions {
  online = "online",
  offline = "offlines",
}
type AvatarProps = {
  src: string;
  alt: string;
  size?: {
    width?: string;
    height?: string;
  };
  className?: string;
  status?: StatusOptions;
};
const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { src, alt, size, className, status } = props;
  return (
    <div
      data-testid="avatar"
      className={`avatar ${status ? `avatar--status-${status}` : ""}`}
    >
      <img
        src={src}
        alt={alt}
        className={`avatar--${className}`}
        /*  height={size?.height}
        width={size?.width} */
        // className={`${className} `}
        style={{ height: `${size?.height}px`, width: `${size?.width}px` }}
      />
    </div>
  );
};
export default Avatar;
