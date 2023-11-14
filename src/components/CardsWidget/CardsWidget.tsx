import { useEffect, useState } from "react";

import Preloader from "../Preloader/Preloader";
import List from "../List/List";
import Details from "../Details/Details";

import "./CardWidget.css";

const CardWidget = ({ baseUrl }: { baseUrl: string }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [activeId, setId] = useState<number>();
  const [details, setDetails] = useState();

  const fetchDetails = async (id: number) => {
    try {
      const response = await fetch(baseUrl + id + ".json");
      if (!response.ok) {
        throw new Error("Error of detail fetch");
      }
      const json = await response.json();
      console.log(json);
      return json;
    } catch (e) {
      console.error(e);
    }
  };

  const onClickHandler = (id: number) => {
    if (id === activeId) {
      return;
    }
    setId(id);
  };

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(baseUrl + "users.json");
        if (!response.ok) {
          console.error(response.statusText);
          return;
        }
        const list = await response.json();
        setList(list);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  }, []);

  useEffect(
    () => async () => {
      if (activeId) {
        console.log("1");
        const list = await fetchDetails(activeId);
        setDetails(list);
      }
    },
    [activeId]
  );

  return (
    <div className="CardWidget">
      {(loading && <Preloader />) || (
        <List list={list} onClickHandler={onClickHandler} />
      )}
      {activeId && details && <Details data={details} />}
    </div>
  );
};

export default CardWidget;
