import propTypes from 'prop-types';
function TodoElement({ naslov, sadrzaj, aktivan, onStatusChange, onDelete }) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '500px',
        backgroundColor: aktivan ? 'green' : 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{color: 'black'}}>{naslov}</h2>
        <p style={{color: 'black'}}>{sadrzaj}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={onStatusChange} style={{color: 'black'}}>{aktivan ? 'Deaktiviraj' : 'Aktiviraj'}</button>
        <button onClick={onDelete} style={{color: 'black'}}>Obrisi</button>
      </div>
    </div>
  );
}
TodoElement.propTypes = {
  naslov: propTypes.string.isRequired,
  sadrzaj: propTypes.string.isRequired,
  status: propTypes.bool,
  onStatusChange: propTypes.func,
  onDelete: propTypes.func,
};
export default TodoElement;