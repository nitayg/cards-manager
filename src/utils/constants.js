// קבועים שמשמשים את כל המערכת
export const TOTAL_CARDS = 456;  // מספר הקלפים הכולל
export const COLS_PER_ROW = 25;  // מספר הקלפים בכל שורה

// הגדרת הצבעים לכל סטטוס
export const STATUS_COLORS = {
    owned: '#00B050',    // ירוק - יש ברשותי
    missing: '#FFFFFF',   // לבן - חסר
    source1: '#FC4A8A',  // ורוד - מקור 1
    source2: '#FFC000',  // צהוב - מקור 2
    source3: '#D86DCD',  // סגול בהיר - מקור 3
    source4: '#215C98'   // כחול כהה - מקור 4
};

// סדר המעבר בין הסטטוסים בלחיצה
export const STATUS_ORDER = ['missing', 'owned', 'source1', 'source2', 'source3', 'source4'];