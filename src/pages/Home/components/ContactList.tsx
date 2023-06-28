import React, { useState } from "react";
import {
  Container,
  Filter,
  ContactContainer,
  FilterContainer,
  PlaceholderContainer,
} from "./Styles/ContactList.styled";
import { Audio } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux.store";
import { ContactI } from "../../../redux/redux.reducers";
import { ContactElement } from "./ContactElement";
import { useGetUsersContactsQuery } from "../../../redux/redux.query";

export const ContactList: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const contactBook = useSelector((state: RootState) => state.contactBook);
  const token = contactBook.token!;
  const { data, isFetching } = useGetUsersContactsQuery(token);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <Container>
      <FilterContainer>
        <Filter
          placeholder="Enter search query"
          type="text"
          name="filter"
          onChange={handleFilterChange}
        />
      </FilterContainer>

      {data && data.length > 0 ? (
        <ContactContainer>
          {data
            .filter((contact: ContactI) =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((contact: ContactI) => (
              <ContactElement key={contact.id} contact={contact} />
            ))}
        </ContactContainer>
      ) : (
        <PlaceholderContainer className="alertData">
          Add some contacts
        </PlaceholderContainer>
      )}

      {isFetching && (
        <Audio
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </Container>
  );
};
