"use client";

/* Colorful geometric SVG characters inspired by modern illustration style.
   Palette: teal #1B9AAA, lavender #C4A0E8, pink #FF6B8A, yellow #F5C542, navy #1A1040 */

export function HeroCharacter() {
  return (
    <svg viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Background shapes */}
      <rect x="80" y="40" width="200" height="200" rx="16" fill="#C4A0E8" opacity="0.25" />
      <circle cx="320" cy="90" r="40" fill="#1B9AAA" opacity="0.9" />
      <rect x="60" y="260" width="60" height="60" rx="8" fill="#F5C542" opacity="0.8" />

      {/* Person body — sitting/working pose */}
      {/* Torso */}
      <path d="M180 160 C180 160, 160 220, 170 280 L230 280 C240 220, 220 160, 220 160Z" fill="#C4A0E8" />
      {/* Polka dots on shirt */}
      <circle cx="190" cy="195" r="6" fill="white" opacity="0.5" />
      <circle cx="210" cy="210" r="6" fill="white" opacity="0.5" />
      <circle cx="195" cy="235" r="6" fill="white" opacity="0.5" />

      {/* Legs — teal pants */}
      <path d="M170 280 C165 310, 140 370, 130 390 L160 395 L195 290Z" fill="#1B9AAA" />
      <path d="M230 280 C235 310, 260 370, 270 390 L240 395 L205 290Z" fill="#1B9AAA" />
      {/* Wave detail on pants */}
      <path d="M155 340 Q170 330, 185 340" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M225 340 Q240 330, 255 340" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Shoes */}
      <ellipse cx="135" cy="398" rx="25" ry="10" fill="#F5C542" />
      <ellipse cx="265" cy="398" rx="25" ry="10" fill="#F5C542" />
      {/* Shoe laces */}
      <path d="M125 395 Q135 388, 145 395" stroke="#1A1040" strokeWidth="1.5" fill="none" />
      <path d="M255 395 Q265 388, 275 395" stroke="#1A1040" strokeWidth="1.5" fill="none" />

      {/* Arms */}
      {/* Left arm — reaching up */}
      <path d="M175 175 C155 155, 120 120, 110 100" stroke="#FBE0D0" strokeWidth="16" strokeLinecap="round" fill="none" />
      {/* Left hand holding floating element */}
      <circle cx="108" cy="96" r="10" fill="#FBE0D0" />
      {/* Red nails */}
      <circle cx="100" cy="92" r="3" fill="#FF6B8A" />

      {/* Right arm — pointing at screen */}
      <path d="M225 180 C250 165, 290 140, 310 130" stroke="#FBE0D0" strokeWidth="16" strokeLinecap="round" fill="none" />
      {/* Right hand */}
      <circle cx="312" cy="128" r="10" fill="#FBE0D0" />
      {/* Pointing finger */}
      <path d="M318 122 L330 110" stroke="#FBE0D0" strokeWidth="6" strokeLinecap="round" />
      <circle cx="332" cy="108" r="3" fill="#FF6B8A" />

      {/* Head */}
      <circle cx="200" cy="140" r="30" fill="#FBE0D0" />
      {/* Hair — big black bun */}
      <ellipse cx="200" cy="118" rx="32" ry="24" fill="#1A1040" />
      <circle cx="225" cy="112" r="14" fill="#1A1040" />
      {/* Face details */}
      <circle cx="192" cy="143" r="2.5" fill="#1A1040" /> {/* Left eye */}
      <circle cx="210" cy="143" r="2.5" fill="#1A1040" /> {/* Right eye */}
      <path d="M196 153 Q201 157, 206 153" stroke="#1A1040" strokeWidth="1.5" fill="none" /> {/* Smile */}
      {/* Cheek blush */}
      <circle cx="186" cy="150" r="4" fill="#FF6B8A" opacity="0.3" />
      <circle cx="216" cy="150" r="4" fill="#FF6B8A" opacity="0.3" />

      {/* Floating UI elements around the character */}
      {/* Chat bubble — top left */}
      <rect x="50" y="60" width="70" height="40" rx="12" fill="white" stroke="#1A1040" strokeWidth="1.5" />
      <circle cx="70" cy="75" r="4" fill="#1B9AAA" />
      <rect x="80" y="72" width="28" height="3" rx="1.5" fill="#E0D8F0" />
      <rect x="80" y="80" width="18" height="3" rx="1.5" fill="#E0D8F0" />

      {/* Code block — top right */}
      <rect x="290" y="50" width="80" height="55" rx="8" fill="white" stroke="#1A1040" strokeWidth="1.5" />
      <rect x="300" y="62" width="30" height="3" rx="1.5" fill="#FF6B8A" />
      <rect x="300" y="70" width="50" height="3" rx="1.5" fill="#C4A0E8" />
      <rect x="300" y="78" width="40" height="3" rx="1.5" fill="#1B9AAA" />
      <rect x="300" y="86" width="25" height="3" rx="1.5" fill="#F5C542" />
      {/* Play button */}
      <polygon points="356,65 356,78 366,72" fill="#1B9AAA" opacity="0.6" />

      {/* Calendar card — bottom right */}
      <rect x="290" y="200" width="90" height="70" rx="10" fill="white" stroke="#1A1040" strokeWidth="1.5" />
      <rect x="290" y="200" width="90" height="20" rx="10" fill="#FF6B8A" opacity="0.2" />
      {/* Calendar grid */}
      <circle cx="310" cy="235" r="4" fill="#E0D8F0" />
      <circle cx="330" cy="235" r="4" fill="#E0D8F0" />
      <circle cx="350" cy="235" r="4" fill="#6C3CE0" />
      <circle cx="310" cy="252" r="4" fill="#E0D8F0" />
      <circle cx="330" cy="252" r="4" fill="#1B9AAA" opacity="0.3" />
      <circle cx="350" cy="252" r="4" fill="#E0D8F0" />

      {/* Gear/automation icon — floating */}
      <circle cx="60" cy="200" r="22" fill="none" stroke="#1B9AAA" strokeWidth="2" />
      <circle cx="60" cy="200" r="8" fill="#1B9AAA" opacity="0.3" />
      {/* Gear teeth */}
      <rect x="56" y="175" width="8" height="8" rx="2" fill="#1B9AAA" opacity="0.5" />
      <rect x="56" y="217" width="8" height="8" rx="2" fill="#1B9AAA" opacity="0.5" />
      <rect x="35" y="196" width="8" height="8" rx="2" fill="#1B9AAA" opacity="0.5" />
      <rect x="77" y="196" width="8" height="8" rx="2" fill="#1B9AAA" opacity="0.5" />

      {/* Floating decorative shapes */}
      <circle cx="340" cy="170" r="8" fill="#F5C542" opacity="0.7" />
      <rect x="30" y="320" width="14" height="14" rx="2" fill="#FF6B8A" opacity="0.5" transform="rotate(45 37 327)" />
      <circle cx="350" cy="300" r="6" fill="#C4A0E8" opacity="0.6" />

      {/* Connection lines — dotted */}
      <line x1="110" y1="98" x2="85" y2="80" stroke="#C4A0E8" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="330" y1="110" x2="330" y2="70" stroke="#1B9AAA" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  );
}

export function SmallCharacterBot() {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Robot body */}
      <rect x="15" y="30" width="50" height="40" rx="12" fill="#1B9AAA" />
      {/* Screen face */}
      <rect x="22" y="37" width="36" height="22" rx="6" fill="white" />
      {/* Eyes */}
      <circle cx="33" cy="47" r="3" fill="#1A1040" />
      <circle cx="47" cy="47" r="3" fill="#1A1040" />
      {/* Smile */}
      <path d="M35 52 Q40 56, 45 52" stroke="#FF6B8A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Antenna */}
      <line x1="40" y1="30" x2="40" y2="18" stroke="#1A1040" strokeWidth="2" />
      <circle cx="40" cy="14" r="5" fill="#F5C542" />
      {/* Arms */}
      <rect x="5" y="40" width="12" height="6" rx="3" fill="#C4A0E8" />
      <rect x="63" y="40" width="12" height="6" rx="3" fill="#C4A0E8" />
      {/* Legs */}
      <rect x="25" y="70" width="10" height="14" rx="5" fill="#1B9AAA" />
      <rect x="45" y="70" width="10" height="14" rx="5" fill="#1B9AAA" />
      {/* Feet */}
      <ellipse cx="30" cy="86" rx="8" ry="4" fill="#F5C542" />
      <ellipse cx="50" cy="86" rx="8" ry="4" fill="#F5C542" />
    </svg>
  );
}

export function SmallCharacterPerson() {
  return (
    <svg viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Head */}
      <circle cx="35" cy="22" r="16" fill="#FBE0D0" />
      {/* Hair */}
      <ellipse cx="35" cy="14" rx="18" ry="12" fill="#1A1040" />
      {/* Hair bun */}
      <circle cx="48" cy="10" r="7" fill="#1A1040" />
      {/* Eyes */}
      <circle cx="30" cy="24" r="2" fill="#1A1040" />
      <circle cx="40" cy="24" r="2" fill="#1A1040" />
      {/* Body — yellow top */}
      <path d="M22 38 C22 38, 18 60, 20 75 L50 75 C52 60, 48 38, 48 38Z" fill="#F5C542" />
      {/* Collar detail */}
      <path d="M28 38 L35 48 L42 38" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Pants — teal */}
      <path d="M20 75 L16 95 L28 95 L33 78Z" fill="#1B9AAA" />
      <path d="M50 75 L54 95 L42 95 L37 78Z" fill="#1B9AAA" />
      {/* Shoes */}
      <ellipse cx="22" cy="97" rx="10" ry="4" fill="#FF6B8A" />
      <ellipse cx="48" cy="97" rx="10" ry="4" fill="#FF6B8A" />
    </svg>
  );
}

export function FloatingElements() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Chat bubbles */}
      <rect x="10" y="10" width="45" height="28" rx="10" fill="white" stroke="#1A1040" strokeWidth="1.5" />
      <circle cx="24" cy="22" r="3" fill="#FF6B8A" />
      <rect x="32" y="19" width="16" height="3" rx="1.5" fill="#E0D8F0" />
      <rect x="32" y="26" width="10" height="3" rx="1.5" fill="#E0D8F0" />

      <rect x="60" y="50" width="50" height="28" rx="10" fill="white" stroke="#1A1040" strokeWidth="1.5" />
      <circle cx="74" cy="62" r="3" fill="#1B9AAA" />
      <rect x="82" y="59" width="20" height="3" rx="1.5" fill="#E0D8F0" />
      <rect x="82" y="66" width="14" height="3" rx="1.5" fill="#C4A0E8" />

      {/* Decorative dots */}
      <circle cx="95" cy="20" r="5" fill="#F5C542" opacity="0.7" />
      <circle cx="15" cy="80" r="4" fill="#C4A0E8" opacity="0.6" />
      <rect x="50" y="90" width="10" height="10" rx="2" fill="#FF6B8A" opacity="0.4" transform="rotate(45 55 95)" />

      {/* Arrow connecting */}
      <path d="M52 30 Q65 40, 65 50" stroke="#C4A0E8" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
    </svg>
  );
}
