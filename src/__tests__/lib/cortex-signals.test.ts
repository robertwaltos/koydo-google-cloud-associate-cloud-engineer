import { describe, it, expect, vi } from "vitest";
import { emitPrismSignal } from "@/lib/google-cloud-associate-cloud-engineer/cortex-signals";

describe("PRISM Signals", () => {
  it("dispatches custom event on window", () => {
    const spy = vi.fn();
    window.addEventListener("koydo:prism-signal", spy);
    emitPrismSignal({ eventType: "question_answered", activityType: "google-cloud-associate-cloud-engineer" });
    expect(spy).toHaveBeenCalled();
    window.removeEventListener("koydo:prism-signal", spy);
  });

  it("includes correct event detail", () => {
    let detail: unknown;
    const handler = (e: Event) => { detail = (e as CustomEvent).detail; };
    window.addEventListener("koydo:prism-signal", handler);
    emitPrismSignal({ eventType: "exam_started", value: 1, activityType: "google-cloud-associate-cloud-engineer" });
    expect(detail).toEqual({ eventType: "exam_started", value: 1, activityType: "google-cloud-associate-cloud-engineer" });
    window.removeEventListener("koydo:prism-signal", handler);
  });
});
