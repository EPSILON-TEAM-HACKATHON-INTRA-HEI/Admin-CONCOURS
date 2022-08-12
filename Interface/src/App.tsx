import React from 'react';


function App() {
  
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <nav id="sidebar" className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse">
                <div className="position-sticky">
                    <div className="nav flex-column">
                      <div className="mt-4">
                          <div className="card">
                              <h5 className="card-header">Condition d&apos;admission</h5>
                              <div className="card-body">
                                <p className="card-text">Min admission</p><hr/>
                                <p className="card-text">Min liste d&apos;attente</p><hr/>
                                <p className="card-text">Min Math Bac+concours</p>
                              </div>
                            </div>
                      </div>
                      <div className="mt-4">
                          <div className="card p-2">
                              <p className="card-text">Taux de reussite:</p>
                              <h5>70%</h5>
                              <p className="card-text">Valeur mediane</p>
                              <h5>12</h5>
                          </div>
                      </div>
                  </div>
              </div>
            </nav>
            <main className="col-md-9 ml-sm-auto col-lg-9 px-md-4 py-4">           
                <div className="row">
                    <div className="col-12 mb-4 mb-lg-0">
                        <div className="card">
                            <p className="card-header text-center">Resultats</p>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                          <tr>
                                            <th>#</th>
                                            <th>Nom</th>
                                            <th>Prenoms</th>
                                            <th>Francais concours</th>
                                            <th>Francais Bac</th>
                                            <th>Francais concours + Tle</th>
                                            <th>Math concours</th>
                                            <th>Math Bac</th>
                                            <th>Math concours + Tle</th>
                                            <th>Moyenne de selection</th>
                                            <th>Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th>1</th>
                                            <td>RAKOTO</td>
                                            <td>Safidy</td>
                                            <td>12</td>
                                            <td>12</td>
                                            <td>12</td>
                                            <td>12</td>
                                            <td>12</td>
                                            <td>12</td>
                                            <td>12</td>
                                            <td>Admis</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</>
  );
}

export default App;
