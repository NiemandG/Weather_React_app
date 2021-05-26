import {Link} from 'react-router-dom';
function Header() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Weather-React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/current" className="nav-link active">Главная</Link> 
        </li>
        <li className="nav-item">
          <Link to="/forecast" className="nav-link active">Прогноз на 5 дней</Link> 
        </li>
        <li className="nav-item">
          <Link to="/previous" className="nav-link active">Предыдущие 5 дней</Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;