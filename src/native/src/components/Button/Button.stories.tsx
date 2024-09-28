import { Meta, StoryFn } from "@storybook/react/*";
import { Button } from ".";
import { DEFAULT_THEME } from "../../constants/theme";
import { ThemeProvider } from "../../providers/ThemeProvider";

export default {
  title: "components/Button",
  component: Button,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider userTheme={DEFAULT_THEME}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
} as Meta<typeof Button>;

export const Basic: StoryFn<typeof Button> = (args: any) => (
  <Button {...args} />
);

Basic.args = {
  text: "Hello World",
  color: "purple",
};
