import React from 'react';

const Profile = () => {
  // Email estático por ahora
  const userEmail = "usuario@pizzeria.com";

  const handleLogout = () => {
    alert('Cerrando sesión...');
    // La funcionalidad real se implementará en futuros hitos
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Mi Perfil</h2>
              
              <div className="mb-4">
                <label className="form-label fw-bold">Email:</label>
                <p className="form-control-plaintext border rounded p-2 bg-light">
                  {userEmail}
                </p>
              </div>

              <button 
                className="btn btn-danger w-100"
                onClick={handleLogout}
              >
                🔒 Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;