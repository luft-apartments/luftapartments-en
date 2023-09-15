import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {

  const objToArray = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        image: data[`slides_${slideIndex}_slide_image`],
        link: data[`slides_${slideIndex}_slide_link`],
        link_text: data[`slides_${slideIndex}_slide_link_text`],
        text: data[`slides_${slideIndex}_slide_text`],
        title: data[`slides_${slideIndex}_slide_title`],
      };
      arr.push(slide);
    }

    return arr;
  };

  return blocks.map(block => {
    switch (block.name) {
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        )
      }
      case "core/post-title":
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          />
        );
      }
      case 'core/cover': {
        console.log("BLOCK: ", block);
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}
            overlayColor={block.attributes.overlayColor}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  })
}