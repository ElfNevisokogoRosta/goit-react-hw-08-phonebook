import React from "react";
import {
  Container,
  DataContainer,
  NumberContainer,
  Btn,
} from "./Styles/ContactElement";
import {
  useDeleteContactMutation,
  useGetUsersContactsQuery,
} from "../../../redux/redux.query";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux.store";

interface ContactElementProps {
  contact: { id?: string; name: string; number: string };
}

export const ContactElement: React.FC<ContactElementProps> = ({ contact }) => {
  const token = useSelector((state: RootState) => state.contactBook.token)!;
  const { refetch } = useGetUsersContactsQuery(token);
  const [mutate, { isLoading }] = useDeleteContactMutation();
  const removeContact = async () => {
    const id = contact.id!;
    try {
      await mutate({ id, token });
      refetch();
    } catch (error) {}
  };
  return (
    <Container key={contact.id}>
      <DataContainer>
        <NumberContainer>{contact.name}:</NumberContainer>{" "}
        <NumberContainer>{contact.number}</NumberContainer>
      </DataContainer>

      <Btn id={contact.id} onClick={() => removeContact()} disabled={isLoading}>
        delete
      </Btn>
    </Container>
  );
};
