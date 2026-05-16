import { test, expect } from "playwright/test";

test("clicking a project card navigates to slug page", async ({ page }) => {
    await page.goto("/");

    await page.getByText("Personal Portfolio Website").click();

    await expect(page).toHaveURL(
        /\/projects\/personal-portfolio-website/
    );

    await expect(
        page.getByRole("heading", {
            name: "Personal Portfolio Website",
        })
    ).toBeVisible();
});