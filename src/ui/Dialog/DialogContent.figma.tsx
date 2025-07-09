import { DialogContent } from "./DialogContent";
import figma from "@figma/code-connect";

figma.connect(
  DialogContent,
  "https://www.figma.com/file/gwUXHin1RmkA8RFBVe1K8U?node-id=9215-9333",
  {
    props: {
      headline: figma.string("Headline"),
      content: figma.string("Content"),
    },
    example: ({ headline, content }) => (
      <DialogContent
        headline={<h2>{headline}</h2>}
        content={<p>{content}</p>}
      />
    ),
  }
);
