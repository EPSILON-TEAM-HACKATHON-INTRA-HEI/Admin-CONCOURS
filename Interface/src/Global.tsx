import React from 'react';
import './App.css'


function Global() {
  
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <nav id="sidebar" className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse">
                <div className="position-sticky">
                    <div className="nav flex-column">
                      <div className="mt-4">
                          <div className="card">
                              <h5 className="card-header bg-goldenrod">Condition d&apos;admission</h5>
                              <div className="card-body">
                                <p className="card-text">Min admission</p><hr/>
                                <p className="card-text">Min liste d&apos;attente</p><hr/>
                                <p className="card-text">Min Math Bac+concours</p>
                              </div>
                            </div>
                      </div>
                      <div className="mt-4 flex">
                        <div className="button button_1">Changer</div>
                        <div className="button button_2">Generer</div>
                      </div>
                      <div className="mt-4">
                          <div className="card p-3">
                            <div className="card_content">
                              <p className="card-text">Taux de reussite:</p>
                              <div className="wrap-circles">
                                <div className="circle per-75">
                                  <div className="inner"><strong>75%</strong></div>
                                </div>
                              </div>
                              <p className="card-text">Valeur mediane: <strong>12</strong></p>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
            </nav>
            <main className="col-md-9 ml-sm-auto col-lg-9 px-md-4 py-4">           
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <p className="card-header text-center bg-goldenrod">Resultats</p>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                          <tr>
                                            <th  scope="col">#</th>
                                            <th  scope="col">Nom</th>
                                            <th  scope="col">Prenoms</th>
                                            <th  scope="col">Francais concours</th>
                                            <th  scope="col">Francais Bac</th>
                                            <th  scope="col">Total Francais</th>
                                            <th  scope="col">Math concours</th>
                                            <th  scope="col">Math Bac</th>
                                            <th  scope="col">Total Math</th>
                                            <th  scope="col">Moyenne</th>
                                            <th  scope="col">Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th  scope="col">1</th>
                                            <td  scope="col">SOAMIANDRA</td>
                                            <td  scope="col">Miaritiana Louis Daniel</td>
                                            <td  scope="col">12</td>
                                            <td  scope="col">12</td>
                                            <td  scope="col">12</td>
                                            <td  scope="col">12</td>
                                            <td  scope="col">12</td>
                                            <td  scope="col">12</td>
                                            <td  scope="col">12</td>
                                            <td  scope="col">Admis</td>
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

export default Global;
