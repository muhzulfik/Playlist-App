import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

const Card = forwardRef<BoxProps, "div">(({ ...props }, ref) => {
  return (
    <Box
      rounded="md"
      ref={ref}
      overflow="hidden"
      bg="white"
      maxW="xs"
      {...props}
    />
  );
});

export default Card;
