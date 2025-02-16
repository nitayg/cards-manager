const Card = ({ number, status, onClick }) => {
    const buttonStyle = {
      width: '32px',          // הגדלנו מ-28px
      height: '32px',         // הגדלנו מ-28px
      backgroundColor: STATUS_COLORS[status],
      border: '1px solid #D0D0D0',
      fontSize: '14px',       // הגדלנו מ-12px
      fontWeight: 'bold',
      padding: '0',
      margin: '1px',          // הוספנו מרווח בין הכפתורים
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      touchAction: 'manipulation',
      borderRadius: '4px',    // הוספנו פינות מעוגלות
      color: status === 'missing' ? '#000' : '#fff',  // צבע טקסט דינמי
      userSelect: 'none',     // מונע סימון טקסט בלחיצה ארוכה
      WebkitTapHighlightColor: 'transparent'  // מונע הבהוב בלחיצה באייפון
    };
  
    return (
      <button
        onClick={() => onClick(number)}
        style={buttonStyle}
      >
        {number}
      </button>
    );
  };