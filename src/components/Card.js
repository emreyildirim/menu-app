import React from "react";

const Card = ({ menuItem, handleRouting, count }) => {
  const { image, caption, name, price, orderTag, description } = menuItem;
  const img = image ? image.substring(1, image.length) : "";

  return (
    <section onClick={() => handleRouting(menuItem)} className="food-card card">
      <div>
        <div class="card-header">
          {name || caption || orderTag || description}
        </div>
        {img ? (
          <img className="card-img-top" src={img} alt="foot-photo" />
        ) : null}

        {price ? (
          <div className="card-body">
            {" "}
            <span>Fiyat: {price}₺ </span> <span> Adet: {count} </span>
          </div>
        ) : (
          <div className="card-body"> <span> Adet: {count} </span></div>
        )}
      </div>
    </section>
  );
};

export default Card;
