function BookCard({ titre, auteur, estDisponible, onClickEmprunt }){
  return (
    <div>
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>
      <p>Statut : {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  )
}

export default BookCard;