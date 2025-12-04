export const DiscordFrame = () => {
  return (
    <iframe
      src="https://discord.com/widget?id=1259422494012735538&theme=dark"
      width="350"
      height="500"
      style={{ "border-radius": "10px" }}
      //@ts-ignore
      allowtransparency="true"
      frameborder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    />
  );
};
