import { vi } from "vitest";

export const mockPush = vi.fn();

export const mockRouter = {
    push: mockPush,
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
};

vi.mock("next/navigation", () => ({
    useRouter: () => mockRouter,
}));