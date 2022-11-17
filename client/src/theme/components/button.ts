export const Button = {
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
  sizes: {
    md: {
      fontSize: '14px',
      px: 5,
      h: 10,
      py: 2,
    },
  },
  baseStyle: {
    textTransform: 'uppercase',
    lineHeight: '24px',
    borderRadius: '4px',
  },
  variants: {
    primary: {
      fontWeight: 600,
      color: 'white.900',
      bg: 'blue.400',
      _disabled: {
        opacity: 1,
        bg: 'gray.100',
        color: 'white.900',
      },
      _hover: {
        _disabled: {
          opacity: 1,
          bg: 'gray.100',
          color: 'white.900',
        },
      },
    },
  },
};
