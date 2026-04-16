# shabuj_portfolio

## Deploy To GitHub Pages

This project is configured to auto-deploy to GitHub Pages using GitHub Actions.

### 1. Push this project to GitHub

Push the code to a GitHub repository and make sure your default branch is `main`.

### 2. Enable Pages in repository settings

In your GitHub repository:

1. Go to **Settings** -> **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### 3. Trigger deployment

Each push to `main` will run the workflow and deploy the latest version.

The workflow file is at `.github/workflows/deploy.yml`.

## Notes

- The app uses `BASE_PATH` during CI so it works for project pages like `https://<username>.github.io/<repo>/`.
- Local development still works normally with `/` as the base path.
