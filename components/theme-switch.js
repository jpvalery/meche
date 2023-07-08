import { useTheme } from 'next-themes';

import { useHasMounted } from '@lib/helpers';

import Swatch from '@components/swatch';

const themes = [
  { title: "Mode Cire (light)", name: "light", color: { hex: "#FFFBEB" } },
  { title: "Mode Meche (dark)", name: "dark", color: { hex: "#0C0A09" } },
  { title: "Mode Braise (rouge)", name: "metal", color: { hex: "#B91C1C" } },
];

const ThemeSwitch = () => {
  const hasMounted = useHasMounted()
  const { theme, setTheme } = useTheme()

  // Make sure it's client-only
  if (!hasMounted || !theme) return null

  // store our current and next theme objects (will be first theme, if undefined)
  const currentIndex = Math.max(
    0,
    themes.findIndex((t) => t.name === theme)
  )

  const nextTheme = themes[(currentIndex + 1) % themes.length]
  const currentTheme = themes[currentIndex]

  return (
    <div className="theme-switch">
      <button
        className="theme-switch--toggle"
        onClick={() => setTheme(nextTheme.name)}
        aria-label={`Change theme to ${nextTheme.title}`}
      >
        <Swatch color={currentTheme.color} />
        <div className="theme-switch--label">{currentTheme.title}</div>
      </button>
    </div>
  )
}

export default ThemeSwitch
