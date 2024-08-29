function Table({ rank, name, points, countryCode, city, githubUrl }) {
  return (
    <table className="developer-table">
      <tbody>
        <tr>
          <td>{rank}</td>
          <td>
            <a href="#">{name}</a>
          </td>
          <td>
            <span className="profile-icons">
              <a href={githubUrl}>GitHub</a>
            </span>
          </td>
          <td>{countryCode}</td>
          <td>{city}</td>
          <td>{points}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
