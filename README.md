## About
This website is to help people check if a domain is available. The app will then send a reminder when the domain you are tracking is expiring.

Uses:
- NextJs
- Typescript
- Prisma
- Shadcn UI
- TRPC
- Payload
- Node.Js & Express server

[![Video](https://img.youtube.com/vi/egzwL6vSG2U/maxresdefault.jpg)](https://www.youtube.com/watch?v=egzwL6vSG2U)



## Try it out

Please try it out and leave me feedback.
1. To start: Clone the repository
    ```bash
        git clone https://github.com/brettzky10/domain-search.git
    ```
    1. Install the necessary dependencies:

        ```bash
        npm install
        ```

    2. Create a file `.env.local` with your Project. See `.env.example` for an example. Visit the sites in the env.example and paste their respective keys.

        ```bash
        MONGODB_SECRET_KEY=
        ...
        ```

    3. Setup Prisma:

        ```bash
        npx prisma generate
        ```
        ```bash
        npx prisma db push
        ```
    4. Run Server:

        ```bash
        npx prisma generate
        ```
        ```bash
        npx prisma db push
        ```

    5. That's it! You should now be able to open the website in your browser!