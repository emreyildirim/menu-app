import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Card } from "../components";
import getMenuSelector from "../helper/getMenuSelector";
import getTextFromRegexHelper from "../helper/getTextFromRegexHelper";
import {
  addItemToCard,
  deleteItemFromCard,
} from "../redux/actions/cardActions";

const MenuDetail = () => {
  const { id, subId } = useParams();
  const history = useHistory();
  const [menu, key] = useSelector((state) => getMenuSelector(state, id, subId));
  const main = useSelector((state) => state.menu.main);
  const cardItems = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const handleAddItemToCard = (menuItem) => {
    if (key) {
      const item = cardItems.find((item) => item?.key === key);
      if (item) {
        alert("En fazla 1 tane ürün seçebilirsiniz.");
        dispatch(deleteItemFromCard(menuItem));
        return;
      }
      dispatch(addItemToCard({ ...menuItem, key }));
      return;
    }
    // const item = cardItems.find(item => item.name === menuItem.name);
    // if (item) {
    //   dispatch(deleteItemFromCard(item));
    //   return;
    // }
    dispatch(addItemToCard(menuItem));
  };

  const handleRouting = (menuItem) => {
    if (menuItem.key) {
      history.push(`/${menuItem.key}`);
      return;
    }

    if (menuItem.items || menuItem.subMenus) {
      let preName = menuItem.name;
      const [text] = getTextFromRegexHelper(preName, ["-", "/"], ["&", "*"]);

      const url = text.toLocaleLowerCase("tr-TR").split(" ").join("-");

      if (id && !subId) {
        history.push(`${id}/${url}`);
        return;
      }

      history.push(`/${url}`);
      return;
    }

    handleAddItemToCard(menuItem);
  };

  const getItemCountInCart = (menuItem) => {
    if (menuItem.items) {
      return;
    }

    const count = cardItems.filter((item) => item.name === menuItem.name)
      .length;
    return count;
  };

  return (
    <div className="container">
      <div className="row">
        {menu.map((item) => (
          <div className="col-12 col-md-4">
            <Card
              handleRouting={handleRouting}
              menuItem={item}
              count={getItemCountInCart(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDetail;
