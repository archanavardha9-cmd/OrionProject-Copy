export const BrandLogos = {
  levis: (props) => (
    <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Levi's iconic red Batwing logo */}
      <path
        d="M5 12C35 12 70 28 100 28C130 28 165 12 195 12V68C162 68 135 84 100 74C65 84 38 68 5 68V12Z"
        fill="#C4122F"
      />
      {/* White Levi's typography */}
      <g fill="#FFFFFF">
        {/* L */}
        <path d="M28 35H37V57H52V64H28V35Z" />
        {/* e */}
        <path d="M57 48C57 42 62 38 69 38C77 38 81 42 81 49V51H64C64.5 55 67 58 72 58C75.5 58 78 56.5 79.5 54.5L84 58C81.5 61.5 77 64 71 64C62 64 57 58 57 48ZM74.5 46C74 43 72 41.5 69 41.5C66 41.5 64.5 43 64 46H74.5Z" />
        {/* v */}
        <path d="M84 39H91.5L98 56.5L104.5 39H112L102 64H94L84 39Z" />
        {/* i */}
        <path d="M115 42H122V64H115V42ZM115 34H122V39H115V34Z" />
        {/* ' */}
        <path d="M125 33H129.5L128 41H124.5L125 33Z" />
        {/* s */}
        <path d="M133 58C134.5 60 137.5 61.5 141 61.5C144.5 61.5 146.5 60 146.5 58C146.5 55.5 144 54.5 139.5 53.5C134 52 130 49.5 130 45C130 40.5 134 37.5 140.5 37.5C145 37.5 149 39.5 151 42.5L147.5 46.5C146 44.5 143.5 43 140.5 43C137.5 43 136 44.2 136 45.5C136 47 138 48 142.5 49C148.5 50.5 152.5 53 152.5 57.5C152.5 62.5 148 65 141 65C135.5 65 131 62.5 128.5 58.5L133 58Z" />
      </g>
      <circle cx="158" cy="40" r="3" stroke="#FFFFFF" strokeWidth="0.8" />
      <text x="156.5" y="42" fill="#FFFFFF" fontSize="3.5" fontFamily="sans-serif" fontWeight="bold">R</text>
    </svg>
  ),

  'being-human': (props) => (
    <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Hand-drawn heart emblem */}
      <path
        d="M175 18C162 7 140 14 135 32C130 14 108 7 95 18C80 32 82 54 102 74C118 90 135 96 135 96C135 96 152 90 168 74C188 54 190 32 175 18Z"
        stroke="#E63946"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Being Human calligraphy */}
      <text x="120" y="52" fill="#FFFFFF" fontSize="24" fontFamily="'Brush Script MT', 'Caveat', cursive, sans-serif" fontWeight="bold" textAnchor="middle">
        Being human
      </text>
      <text x="120" y="70" fill="#E63946" fontSize="10" fontFamily="'DM Sans', sans-serif" letterSpacing="4" fontWeight="700" textAnchor="middle">
        CLOTHING
      </text>
    </svg>
  ),

  'allen-solly': (props) => (
    <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Stag/Deer crest */}
      <path
        d="M120 8L122 17C125 15 130 12 135 15C130 18 128 22 126 26C131 24 137 25 140 30C134 30 128 32 125 36L122 46H118L115 36C112 32 106 30 100 30C103 25 109 24 114 26C112 22 110 18 105 15C110 12 115 15 118 17L120 8Z"
        fill="#C8A96A"
      />
      <circle cx="120" cy="38" r="4" fill="#C8A96A" />
      {/* Allen Solly clean serif typography */}
      <text x="120" y="68" fill="#FFFFFF" fontSize="24" fontFamily="'Playfair Display', Georgia, serif" letterSpacing="3" fontWeight="600" textAnchor="middle">
        Allen Solly
      </text>
      <text x="120" y="82" fill="#C8A96A" fontSize="7.5" fontFamily="'DM Sans', sans-serif" letterSpacing="5" textAnchor="middle">
        ESTD 1744 · NOTTINGHAM
      </text>
    </svg>
  ),

  'peter-england': (props) => (
    <svg viewBox="0 0 240 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Green & Red flag dual block badge */}
      <rect x="25" y="10" width="95" height="65" fill="#0E5E3D" rx="2" />
      <rect x="120" y="10" width="95" height="65" fill="#AE2024" rx="2" />
      {/* Inner white outline box */}
      <rect x="35" y="18" width="170" height="49" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      {/* Peter England text */}
      <text x="120" y="50" fill="#FFFFFF" fontSize="17" fontFamily="'DM Sans', 'Montserrat', sans-serif" fontWeight="800" letterSpacing="3" textAnchor="middle">
        PETER ENGLAND
      </text>
    </svg>
  ),

  skechers: (props) => (
    <svg viewBox="0 0 240 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Slanted bold S with speed stripes */}
      <g transform="skewX(-14)">
        <path
          d="M60 22C42 22 32 29 32 39C32 50 48 53 58 56C68 59 72 63 72 69C72 77 62 82 48 82C34 82 24 76 20 68L30 60C33 65 39 69 48 69C54 69 60 66 60 61C60 55 52 53 42 49C30 45 22 41 22 30C22 18 34 10 52 10C64 10 74 15 78 22L68 30C65 25 58 22 50 22H60Z"
          fill="#0055A5"
        />
        <line x1="16" y1="46" x2="78" y2="46" stroke="#FFFFFF" strokeWidth="2.5" />
      </g>
      {/* SKECHERS bold speed typography */}
      <text x="145" y="58" fill="#FFFFFF" fontSize="26" fontFamily="'Arial Black', Impact, sans-serif" fontStyle="italic" letterSpacing="2" textAnchor="middle">
        SKECHERS
      </text>
    </svg>
  ),

  crocs: (props) => (
    <svg viewBox="0 0 220 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Crocs Duke Crocodile Circle Badge */}
      <circle cx="48" cy="42" r="26" fill="#1B4D3E" />
      <path
        d="M32 44C32 34 40 28 50 28C56 28 62 31 66 36L61 40C58 37 54 35 50 35C44 35 40 39 40 44C40 49 44 53 50 53C54 53 58 51 61 48L66 52C62 57 56 60 50 60C40 60 32 54 32 44Z"
        fill="#FFFFFF"
      />
      <circle cx="58" cy="36" r="3" fill="#FFFFFF" />
      <circle cx="58" cy="36" r="1.5" fill="#1B4D3E" />
      {/* Distinctive lowercase rounded crocs wordmark */}
      <text x="140" y="54" fill="#FFFFFF" fontSize="36" fontFamily="'Comfortaa', 'Varela Round', sans-serif" fontWeight="900" letterSpacing="-1" textAnchor="middle">
        crocs
      </text>
      <circle cx="195" cy="32" r="3" stroke="#FFFFFF" strokeWidth="0.8" />
      <text x="193.5" y="34.2" fill="#FFFFFF" fontSize="3.8" fontFamily="sans-serif">TM</text>
    </svg>
  ),

  'pepe-jeans': (props) => (
    <svg viewBox="0 0 240 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Iconic Pepe Jeans London Signature script */}
      <text x="120" y="48" fill="#FFFFFF" fontSize="34" fontFamily="'Brush Script MT', 'Dancing Script', cursive, sans-serif" fontStyle="italic" fontWeight="bold" letterSpacing="1" textAnchor="middle">
        Pepe Jeans
      </text>
      <text x="120" y="68" fill="#C8A96A" fontSize="10" fontFamily="'DM Sans', sans-serif" letterSpacing="7" fontWeight="600" textAnchor="middle">
        LONDON
      </text>
    </svg>
  ),

  mufti: (props) => (
    <svg viewBox="0 0 200 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Mufti folding M wave crest */}
      <path
        d="M80 18L100 36L120 18L138 34L120 50L100 32L80 50L62 34L80 18Z"
        fill="#FFFFFF"
      />
      <path
        d="M100 38L114 52L100 66L86 52L100 38Z"
        fill="#C8A96A"
      />
      {/* Mufti lowercase wordmark */}
      <text x="100" y="76" fill="#FFFFFF" fontSize="22" fontFamily="'DM Sans', sans-serif" fontWeight="900" letterSpacing="4" textAnchor="middle">
        mufti
      </text>
    </svg>
  ),

  w: (props) => (
    <svg viewBox="0 0 160 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Mirrored calligraphy W emblem */}
      <path
        d="M48 24C48 38 58 54 70 54C62 44 60 34 60 24C60 20 62 16 66 16C72 16 76 28 80 42C84 28 88 16 94 16C98 16 100 20 100 24C100 34 98 44 90 54C102 54 112 38 112 24C112 18 106 12 96 12C88 12 82 18 80 24C78 18 72 12 64 12C54 12 48 18 48 24Z"
        fill="#D4AF37"
      />
      <text x="80" y="74" fill="#FFFFFF" fontSize="11" fontFamily="'DM Sans', sans-serif" letterSpacing="4" fontWeight="600" textAnchor="middle">
        FOR WOMAN
      </text>
    </svg>
  ),

  reebok: (props) => (
    <svg viewBox="0 0 220 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Reebok Vector wings */}
      <path d="M30 48L65 24L75 32L48 50L30 48Z" fill="#D32F2F" />
      <path d="M48 53L75 35L82 42L60 58L48 53Z" fill="#0D2B45" />
      <path d="M85 24L52 64H66L95 28L85 24Z" fill="#D32F2F" />
      {/* Reebok modern wordmark */}
      <text x="145" y="52" fill="#FFFFFF" fontSize="28" fontFamily="'Arial Black', sans-serif" fontWeight="900" letterSpacing="1" textAnchor="middle">
        Reebok
      </text>
    </svg>
  ),

  colorplus: (props) => (
    <svg viewBox="0 0 220 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* CP ligature */}
      <circle cx="50" cy="42" r="22" stroke="#2D7A58" strokeWidth="3" />
      <path d="M42 32H54C59 32 62 35 62 39C62 43 59 46 54 46H47V54H42V32ZM47 37V41H53C55 41 57 40 57 39C57 38 55 37 53 37H47Z" fill="#2D7A58" />
      {/* ColorPlus text */}
      <text x="140" y="52" fill="#FFFFFF" fontSize="24" fontFamily="'Playfair Display', Georgia, serif" fontStyle="italic" fontWeight="700" letterSpacing="2" textAnchor="middle">
        ColorPlus
      </text>
    </svg>
  ),

  'van-heusen': (props) => (
    <svg viewBox="0 0 240 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Sharp dual-chevron V */}
      <path d="M45 16L60 58L75 16H66L60 38L54 16H45Z" fill="#FFFFFF" />
      <path d="M52 24L60 48L68 24H63L60 33L57 24H52Z" fill="#C8A96A" />
      {/* VAN HEUSEN clean luxury text */}
      <text x="150" y="44" fill="#FFFFFF" fontSize="19" fontFamily="'DM Sans', 'Cinzel', sans-serif" fontWeight="700" letterSpacing="4" textAnchor="middle">
        VAN HEUSEN
      </text>
      <text x="150" y="60" fill="#C8A96A" fontSize="8" fontFamily="'DM Sans', sans-serif" letterSpacing="4" textAnchor="middle">
        WORLD'S NO. 1 DRESS SHIRT
      </text>
    </svg>
  ),

  'max-fashion': (props) => (
    <svg viewBox="0 0 200 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Bold geometric max */}
      <text x="75" y="58" fill="#FFFFFF" fontSize="48" fontFamily="'Arial Black', sans-serif" fontWeight="900" letterSpacing="-1" textAnchor="middle">
        max
      </text>
      {/* Blue & Orange accent bars */}
      <rect x="140" y="24" width="8" height="34" fill="#0072CE" rx="2" />
      <rect x="152" y="24" width="8" height="34" fill="#F36F21" rx="2" />
      <text x="100" y="74" fill="#C8A96A" fontSize="9" fontFamily="'DM Sans', sans-serif" letterSpacing="5" textAnchor="middle">
        NEW STYLES EVERY WEEK
      </text>
    </svg>
  ),

  ucb: (props) => (
    <svg viewBox="0 0 240 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Benetton iconic green rectangle with stitch/knot */}
      <rect x="15" y="14" width="58" height="58" fill="#00805A" rx="4" />
      <circle cx="44" cy="34" r="10" stroke="#FFFFFF" strokeWidth="3" fill="none" />
      <line x1="30" y1="56" x2="44" y2="34" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="56" x2="44" y2="34" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="46" x2="54" y2="46" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      {/* United Colors of Benetton */}
      <text x="85" y="38" fill="#FFFFFF" fontSize="13" fontFamily="'Arial Black', sans-serif" fontWeight="800" letterSpacing="1">
        UNITED COLORS
      </text>
      <text x="85" y="55" fill="#FFFFFF" fontSize="13" fontFamily="'Arial Black', sans-serif" fontWeight="800" letterSpacing="1">
        OF BENETTON.
      </text>
    </svg>
  ),

  spykar: (props) => (
    <svg viewBox="0 0 200 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Spykar dynamic dual loop */}
      <path
        d="M40 28C34 28 30 34 30 42C30 50 36 56 44 56C54 56 62 48 70 38C78 28 86 22 96 22C106 22 112 28 112 36C112 44 106 50 98 50C88 50 80 42 72 32"
        stroke="#E63946"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* spykar wordmark */}
      <text x="125" y="52" fill="#FFFFFF" fontSize="28" fontFamily="'Arial Black', sans-serif" fontWeight="900" letterSpacing="1" textAnchor="middle">
        spykar
      </text>
      <text x="125" y="68" fill="#E63946" fontSize="8" fontFamily="'DM Sans', sans-serif" letterSpacing="3" fontWeight="700" textAnchor="middle">
        SINCE 1992 · DENIM
      </text>
    </svg>
  ),
}

