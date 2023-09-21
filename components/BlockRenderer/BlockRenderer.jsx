"use client";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { Cover } from "components/Cover";
import { theme } from "theme";
import { Slider } from "components/Slider/Slider";
import { ImageCustom } from "components/ImageCuston/ImageCustom";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import { IconBlock } from "components/IconBlock";
import { DividerBlock } from "components/DividerBlock/DividerBlock";
import { Map } from "components/Map";
import { SliderReviews } from "components/SliderReviews";

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

  const objToArrayReviews = (data) => {
    const arr = [];
    const slideCount = data.slides_reviews;
    console.log("SLIDE COUNT: ", slideCount)

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        name: data[`slides_reviews_${slideIndex}_slide_slide_name`],
        flag: data[`slides_reviews_${slideIndex}_slide_slide_flag`],
        country: data[`slides_reviews_${slideIndex}_slide_slide_country`],
        period: data[`slides_reviews_${slideIndex}_slide_slide_period`],
        amountIcon: data[`slides_reviews_${slideIndex}_slide_slide_amount_icon`],
        amountDescription: data[`slides_reviews_${slideIndex}_slide_slide_amount_description`],
        commentGood: data[`slides_reviews_${slideIndex}_slide_slide_comment_good`],
      };
      arr.push(slide);
    }

    return arr;
  }

  return blocks.map(block => {
    switch (block.name) {
      case "acf/googlemap": {
        console.log("GOOGLE MAP: ", block.attributes.data);
        return (
          <Map
            key={block.id}
            lat={block.attributes.data.google_map.lat}
            lng={block.attributes.data.google_map.lng}
            zoom={block.attributes.data.google_map.zoom}
          />
        )
      }
      case "acf/iconblock": {
        return (
          <IconBlock
            key={block.id}
            background={block.attributes.data.background_color}
            icon={block.attributes.data.icon}
            text={block.attributes.data.text}
          />
        )
      }
      case "acf/dividerblock": {
        return (
          <DividerBlock
            key={block.id}
            background={block.attributes.data.divider_background_color}
            icon={block.attributes.data.divider_icon}
          />
        )
      }
      case "acf/swiperslider": {
        const innerBlocks = objToArray(block.attributes.data, "slides");
        // console.log("SLIDER: ", innerBlocks)
        return (
          <Slider
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/sliderreviews": {
        const innerBlocks = objToArrayReviews(block.attributes.data, "slides_reviews");
        // console.log("SLIDER REVIEWS: ", innerBlocks)
        return (
          <SliderReviews
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "core/paragraph": {
        // console.log("PARAGRAPH: ", block.attributes);
        const marginTop = block.attributes.style?.spacing?.margin?.top || '0px';
        const marginBottom = block.attributes.style?.spacing?.margin?.bottom || '0px';
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            fontSize={block.attributes.fontSize}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            marginTop={marginTop}
            marginBottom={marginBottom}
          />
        )
      }
      case "core/post-title":
      case "core/heading": {
        // console.log("HEADING: ", block.attributes);
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
        console.log("COVER: ", block.attributes);
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
      case "core/columns": {
        // console.log("COLUMNS:", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            verticalAlignment={block.attributes.verticalAlignment}
            marginTop={block.attributes.style?.spacing?.margin?.top}
            marginBottom={block.attributes.style?.spacing?.margin?.bottom}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        )
      }
      case "core/column": {
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        )
      }
      case "core/image": {
        // console.log("IMAGE:", block.attributes);
        return (
          <ImageCustom
            key={block.id}
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
            align={block.attributes.align}
            href={block.attributes?.href}
          />
        )
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  })
}