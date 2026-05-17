import { test, expect } from "playwright/test";

test("clicking a project card navigates to slug page", async ({ page }) => {
    await page.goto("/");

    const firstCard = page.locator('[data-testid="project-card"]').first();
    await expect(firstCard).toBeVisible();

    const slug = await firstCard.getAttribute("data-slug");

    await firstCard.click();

    await expect(page).toHaveURL(`/projects/${slug}`);

    await expect(
        page.getByRole("heading", { level: 1 })
    ).toBeVisible();
});

