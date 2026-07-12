/**
 * Design tokens — 모든 컴포넌트는 색·타이포·모션 값을 여기서 가져다 쓴다.
 * 컴포넌트에 hex/rgba를 직접 하드코딩하지 말 것.
 */
export const tokens = {
  color: {
    // brand accent
    accent: "#5EEAD4", // teal — 포인트, 궤도 라벨, 링크 hover
    accentSky: "#38bdf8", // 그라데이션 시작
    accentGreen: "#00ff95", // 그라데이션 끝

    // text
    textStrong: "#fff8ee", // floral white — 헤드라인
    textBody: "#cbd5e1",
    textMuted: "#94a3b8",
    textFaint: "#64748B", // 날짜·메타
    textDim: "#475569", // 푸터
    textChip: "#E2E8F0",

    // surface
    surfaceChip: "rgba(15, 23, 42, 0.85)",
    surfaceCard: "rgba(15, 23, 42, 0.35)",
    surfaceTag: "rgba(45, 212, 191, 0.3)",
    surfaceAccentHover: "rgba(94, 234, 212, 0.08)",

    // border / line
    borderAccent: "rgba(94, 234, 212, 0.45)",
    borderAccentSoft: "rgba(94, 234, 212, 0.35)",
    borderAccentFaint: "rgba(94, 234, 212, 0.15)",
    borderMuted: "rgba(148, 163, 184, 0.25)",
    divider: "rgba(148, 163, 184, 0.15)",
    orbitLine: "rgba(94, 234, 212, 0.18)",
    orbitLineFaint: "rgba(94, 234, 212, 0.12)",
  },

  gradient: {
    accent: "linear-gradient(45deg, #38bdf8, #00ff95)",
    thread:
      "linear-gradient(180deg, rgba(94, 234, 212, 0.02), rgba(94, 234, 212, 0.55))",
    timeline:
      "linear-gradient(180deg, rgba(94, 234, 212, 0.45), rgba(94, 234, 212, 0.05))",
    heroCore:
      "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(0, 255, 149, 0.1) 55%, transparent 72%)",
  },

  glow: {
    node: "0 0 12px rgba(94, 234, 212, 0.6)",
    dot: "0 0 12px rgba(94, 234, 212, 0.8)",
    chip: "0 0 16px rgba(94, 234, 212, 0.4)",
    social: "0 0 16px rgba(94, 234, 212, 0.25)",
    cta: "0 0 28px rgba(94, 234, 212, 0.3)",
    card: "0 12px 40px rgba(94, 234, 212, 0.08)",
    icon: "drop-shadow(0 0 10px rgba(94, 234, 212, 0.6))",
  },

  radius: {
    pill: "9999px",
    card: "16px",
  },

  transition: {
    hover: "0.3s ease",
  },

  scale: {
    hover: 1.5,
  },
} as const;

/** 자주 반복되는 sx 조합 */
export const mixins = {
  gradientText: {
    background: tokens.gradient.accent,
    backgroundClip: "text",
    color: "transparent",
  },
  eyebrow: {
    fontSize: "0.8125rem",
    fontWeight: 700,
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: tokens.color.accent,
  },
  orbitLabel: {
    fontSize: "0.6875rem",
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: tokens.color.accent,
  },
  chip: {
    whiteSpace: "nowrap",
    padding: "5px 12px",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    color: tokens.color.textChip,
    backgroundColor: tokens.color.surfaceChip,
    border: `1px solid ${tokens.color.borderAccentSoft}`,
  },
} as const;
