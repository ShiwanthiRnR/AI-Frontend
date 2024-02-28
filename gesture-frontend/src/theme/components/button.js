import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "16px",
  outlineOffset: "0",
  cursor: "pointer",
  color: "black.900",
  fontSize: "24px",
  bg: "blue_gray.100",
  minW: "263px",
});

const sizes = {
  xs: defineStyle({
    h: "51px",
    fontSize: "24px",
    px: "35px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      blue_gray_100: {
        bg: "blue_gray.100",
        color: "black.900",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["blue_gray_100"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
