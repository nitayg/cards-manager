return (
    <div style={{ 
      padding: '5px', 
      direction: 'rtl',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '2px',
        maxWidth: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch'  // גלילה חלקה באייפון
      }}>
        {/* שאר הקוד נשאר אותו דבר */}
      </div>
      <div style={{ 
        marginTop: '20px', 
        textAlign: 'center',
        fontSize: '16px',     // הגדלנו את הטקסט של הסטטיסטיקה
        padding: '10px'
      }}>
        סטטיסטיקה: {stats.owned || 0} קלפים ברשותי,{' '}
        {stats.missing || 0} חסרים,{' '}
        {((stats.source1 || 0) + (stats.source2 || 0) + 
          (stats.source3 || 0) + (stats.source4 || 0))} בדרך
      </div>
    </div>
  );