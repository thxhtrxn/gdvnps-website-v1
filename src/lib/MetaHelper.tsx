import { MetaProvider, Meta, Title } from "@solidjs/meta";

export const MetaHelper = (props: any) => {
  return (
    <MetaProvider>
      <Title>{`${props.title} - GDVNPS`}</Title>
      <Meta name="description" content={`Trang web chính thức của GDVNPS | ${props.title}`} />
      <Meta name="og:title" content={`${props.title} - GDVNPS`} />
      <Meta name="description" content={`Trang web chính thức của GDVNPS | ${props.title}`} />
    </MetaProvider>
  );
};
