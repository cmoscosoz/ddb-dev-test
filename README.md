## DDB Dev Test

### How to submit
- Fork the repo
- Make several small commits, so we can see how you think :)
- Share your forked repo to us

### Background
The objective of this task is to showcase your skills towards a few keys components that we require for our current project. 

In this test you have a notification banner with an envolope icon that shows the total amount of unread messages, and right below a panel with a list of messages received (read and unread) and below that is the reading message panel (initially invisible with opacity 0).

### Task

#### Notification widget at the top
- small animation on the envelope when:
  - messages received - animation already in place to show after 3 seconds - you can change or improve however you like
- "number roller" animation on messages unread upon update

#### Messages list panel
- list all messages from "data" (imported from 'notifications.json')
- list to show messages "title"
- bold for unread messages
- clickable per line and callback to review "message reading block"

#### Message reading block
- to display title and message
- add animation "appear" to the block


### Task Checklist
- [ ] Animations with GSAP
- [ ] useContext for state management (extra points for custom hook)
- [ ] use TailwindCSS for styling

------

### Run the project

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
