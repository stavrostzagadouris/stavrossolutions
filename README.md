# My Personal Website & Blog

This is my personal website and blog, built with SvelteKit and deployed on Cloudflare Pages. I use it to share my thoughts, tutorials, and anything else I find interesting.

## How it works

This website is designed to be simple and easy to maintain. 

It uses [Skeleton](https://www.skeleton.dev/docs/get-started) and tailwind.

## How to use this for your own website

You can easily fork this repository and use it as a template for your own personal website or blog. 

### 1. Fork the repository

Fork button at the top of page.

### 2. Clone the repository

Next, clone the forked repository to your local machine:

```bash
git clone yourForkurl
```

### 3. Customize the content

Now you can start customizing the content.
Note the heading template at the top of an article, then copy that for your first article. It's required so that the link to the article is pulled in properly to auto-link on the homepage. With the template heading safely copied, delete all the articles in the `src/routes/articles` directory.
Then any new .md file you make in that directory will have it's own page and the homepage will link to it.

The +layout.svelte and +page.svelte in src/routes need to be modifed, they are the layout and content area of the homepage.

### 4. Deploy to Cloudflare Pages

Once you're happy with your changes, you can deploy the website to Cloudflare Pages. Here's how:

1.  **Create a Cloudflare account:** If you don't already have one, you'll need to create a [Cloudflare account](https://dash.cloudflare.com/sign-up).
2.  **Create a new Pages project:** In the Cloudflare dashboard, go to "Workers & Pages" and click "Create application".
3.  **Connect to your GitHub account:** Select your forked repository from the list.
4.  **Configure the build settings:** Cloudflare Pages will automatically detect that you're using SvelteKit and configure the build settings for you. You can just accept the defaults.
5.  **Deploy:** Click "Save and Deploy" to deploy your website.

### 5. Connect to a custom domain

Once your website is deployed, you can connect it to a custom domain:

1.  **Add a custom domain:** In the Cloudflare Pages dashboard, go to the "Custom domains" tab and click "Set up a custom domain".
2.  **Follow the instructions:** Cloudflare will guide you through the process of adding the necessary DNS records to your domain registrar.

Now, to update your site, all you need to do is add a new .md file in your articles folder, then push the changes to github. Cloudflare pages will automatically update your website within a minute or two.