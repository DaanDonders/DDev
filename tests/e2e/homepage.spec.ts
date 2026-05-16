import { test, expect } from "playwright/test";

test("homepage loads and displays core sections", async ({ page }) => {
    await page.goto("/");

    // Metadata
    await expect(page).toHaveTitle("Daan Donders");

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute(
        "content",
        "Portfolio of Daan Donders — software developer focused on scalable backend systems, backend architecture, and interactive web applications."
    );

    // ProjectSection
    await expect(
        page.getByRole("heading", { name: "Featured Projects" })
    ).toBeVisible();

    const cards = page.locator('[data-testid="project-card"]');

    await expect(cards.first()).toBeVisible();

    await expect(
        page.getByRole("link", { name: "View Projects" })
    ).toBeVisible();

    // AboutMeSection
    await expect(
        page.getByRole("heading", { name: "About Me" })
    ).toBeVisible();

    // ContactSection
    await expect(
        page.getByRole("heading", { name: "Contact" })
    ).toBeVisible();
});