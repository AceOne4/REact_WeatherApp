import React from "react";
import "./forcast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function Forecast({ data }) {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEKDAYS.slice(dayInWeek, WEEKDAYS.length).concat(
    WEEKDAYS.slice(0, dayInWeek)
  );
  if (!data) return;
  const { list } = data;
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {list?.splice(0, 7).map((item, i) => {
          return (
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily">
                    <img
                      alt="weather"
                      className="icon-cast"
                      src={`Icons/${item?.weather?.[0].icon}.png`}
                    />
                    <label className="days">{forecastDays[i]}</label>
                    <label className="descrp">{item.weather?.[0].main}</label>
                    <label className="min-max">
                      {(item.main?.temp_min - 273.15).toFixed(0)}°C /{" "}
                      {(item.main?.temp_max - 273.15).toFixed(0)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="detail-grid">
                  <div className="details-item">
                    <label>Pressure</label>
                    <label>{item.main?.pressure}hpa</label>
                  </div>
                  <div className="details-item">
                    <label>Humidity</label>
                    <label>{item.main?.humidity}%</label>
                  </div>

                  <div className="details-item">
                    <label>Clouds</label>
                    <label>{item.clouds?.all}% </label>
                  </div>

                  <div className="details-item">
                    <label>Wind spead</label>
                    <label>{item.wind?.speed}m/s</label>
                  </div>

                  <div className="details-item">
                    <label>Sea Level</label>
                    <label>{item.main?.sea_level}m</label>
                  </div>

                  <div className="details-item">
                    <label>Feel Like</label>
                    <label>
                      {(item.main?.feels_like - 273.15).toFixed(2)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default Forecast;
