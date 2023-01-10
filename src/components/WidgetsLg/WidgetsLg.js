import React from "react";
import "./WidgetsLg.css";

function WidgetsLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$168.23</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4100671/pexels-photo-4100671.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="john"
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Doe</span>
          </td>
          <td className="widgetLgDate">5 Jun 2021</td>
          <td className="widgetLgAmount">$108.20</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/8230891/pexels-photo-8230891.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Jenny"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jennifer Caroline</span>
          </td>
          <td className="widgetLgDate">14 Feb 2021</td>
          <td className="widgetLgAmount">$208.03</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4100671/pexels-photo-4100671.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">James Kun</span>
          </td>
          <td className="widgetLgDate">10 mar 2021</td>
          <td className="widgetLgAmount">$193</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/5067201/pexels-photo-5067201.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Jennet"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jennet M.</span>
          </td>
          <td className="widgetLgDate">12 mar 2021</td>
          <td className="widgetLgAmount">$128.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/5067201/pexels-photo-5067201.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Jennet"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mj Maculli</span>
          </td>
          <td className="widgetLgDate">2 April 2021</td>
          <td className="widgetLgAmount">$208.40</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetsLg;
