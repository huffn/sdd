# Storybook Driven Development (SORT 2019)
This app used Create React App and Storybook to generate the initial files by running the following commands
```
npx create-react-app my-app
cd my-app
npx -p @storybook/cli sb init
```

You can use the command `git checkout step-0` to view the app in its initial state. There are 6 other steps that you can checkout if you fall behind.

The app is broken up into the following steps:

| Step   | Description                      |
| ------ | -------------------------------- |
| step-0 | Initial commit                   |
| step-1 | Storybook config setup           |
| step-2 | Github Avatar component created  |
| step-3 | Topic Choice component created   |
| step-4 | Topic List component created     |
| step-5 | Profile component created        |
| step-6 | Swipeable Card component created |

To start Storybook, run the command `npm run storybook`