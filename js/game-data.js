export const GAME_CONFIG = {
  eventName: 'THE GREAT CORE TREASURE HUNT',
  tagline: 'Solve. Search. Race. Find the Treasure.',
  adminPin: '9090',
  finalCode: 'FINAL99',
  teams: [
    { id: 'red', name: 'Team Red', color: '#ff5c72', emoji: '🔴', pin: '1234', route: ['basement', 'notice_board', 'nss', 'procore'] },
    { id: 'blue', name: 'Team Blue', color: '#55a8ff', emoji: '🔵', pin: '2345', route: ['nss', 'basement', 'notice_board', 'procore'] },
    { id: 'green', name: 'Team Green', color: '#52d39b', emoji: '🟢', pin: '3456', route: ['notice_board', 'basement', 'nss', 'procore'] },
    { id: 'yellow', name: 'Team Yellow', color: '#ffc857', emoji: '🟡', pin: '4567', route: ['notice_board', 'nss', 'basement', 'procore'] },
    { id: 'purple', name: 'Team Purple', color: '#b58cff', emoji: '🟣', pin: '5678', route: ['basement', 'nss', 'notice_board', 'procore'] }
  ],
  locations: {
    basement: { name: 'Basement / Scooty Number', shortName: 'Basement', code: 'BASE27', clue: 'Go where the rides rest below, In the PJ Block, down you go.\n Among the two-wheeled ones in line, Find the one marked 1541. That’s where your next clue lies.' },
    procore: { name: 'ProCORE / Pinned Comment', shortName: 'ProCORE', code: 'PRO42', clue: 'Some clues are kept away from the crowd, Find ProCORE where the circle isn’t loud. Look through the posts and search with care, One hidden secret has been placed there. Find what’s waiting for you, And your journey will continue.' },
    notice_board: { name: 'CORE Notice Board / 2nd Floor', shortName: 'CORE Notice Board', code: 'CORE19', clue: 'Climb up high, but not too far, To the second floor, where faces are. Protocol’s core stands proud in view, Pinned on the board, they wait for you. Look among them for your next clue.' },
    nss: { name: 'NSS Board / 1st Floor', shortName: 'NSS Board', code: 'NSS63', clue: 'Not too high, not too low, In PJ, there’s a hidden way to go. Find the staircase that hides from sight, It will lead you to the first-floor height. Look for where NSS messages stay, Your next clue is waiting that way.' }
  },
  riddles: {
    red: [['(15 × 2) + 8 − 11 = ?', 27], ['(48 ÷ 6) + 11 = ?', 19], ['(7 × 8) + 7 = ?', 63], ['(9 × 9) − 39 = ?', 42]],
    blue: [['(18 + 6) ÷ 3 + 55 = ?', 63], ['(6 × 9) − 27 = ?', 27], ['(8² ÷ 4) + 3 = ?', 19], ['(11 × 7) − 35 = ?', 42]],
    green: [['(9 × 4) − 17 = ?', 19], ['(72 ÷ 8) + 18 = ?', 27], ['(12² ÷ 6) + 39 = ?', 63], ['(8 × 8) − 22 = ?', 42]],
    yellow: [['(7 × 9) − 44 = ?', 19], ['(96 ÷ 12) + 55 = ?', 63], ['(125 ÷ 5) + 2 = ?', 27], ['(14 × 6) − 42 = ?', 42]],
    purple: [['(16 × 2) − 5 = ?', 27], ['(81 ÷ 9) + 54 = ?', 63], ['(160 ÷ 8) − 1 = ?', 19], ['(9 × 7) − 21 = ?', 42]]
  }
};

export const STATUS = { NOT_STARTED: 'NOT_STARTED', IN_PROGRESS: 'IN_PROGRESS', COMPLETED: 'COMPLETED', DISABLED: 'DISABLED' };
export const teamById = (id) => GAME_CONFIG.teams.find((team) => team.id === id);
export const locationById = (id) => GAME_CONFIG.locations[id];
export const formatDuration = (milliseconds = 0) => {
  const seconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  return hours ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}` : `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
};
export const createTeamState = (team) => ({ teamId: team.id, teamName: team.name, status: STATUS.NOT_STARTED, currentStage: 0, currentLocation: null, startTime: null, completionTime: null, completedCheckpoints: [], unlocked: false, disabled: false });
