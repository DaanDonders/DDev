import { test, expect } from "playwright/test";

test("project slug page renders correctly", async ({ page }) => {
    await page.goto("/projects/personal-portfolio-website");

    await expect(
        page.getByRole("heading", {
            name: "Personal Portfolio Website",
        })
    ).toBeVisible();

    const githubLink = page.getByRole("link", {
        name: "View on GitHub →",
    });

    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/DaanDonders/DDev"
    );

    await expect(page).toHaveURL(
        /\/projects\/personal-portfolio-website/
    );
});