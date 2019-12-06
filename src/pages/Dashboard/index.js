import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRefresh } from 'react-icons/md';
import Shimmer from 'react-shimmer-effect';

import Container from '~/components/Container';
import Card from '~/components/Card';
import Title from '~/components/Title';
import Button from '~/components/Button';
import { Table, ActionButton } from '~/components/Table';

import { Content, LoadingLine } from './styles';

import { loadRequest } from '~/store/modules/loan/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loan.loading);
  const installments = useSelector(state => state.loan.installments);
  const amountTaken = useSelector(state => state.loan.amountTaken);
  const amountPayd = useSelector(state => state.loan.amountPayd);
  const monthlyInterest = useSelector(state => state.loan.monthlyInterest);
  const totalAmountInTaxes = useSelector(
    state => state.loan.totalAmountInTaxes
  );

  const loadLoans = useCallback(() => {
    dispatch(loadRequest());
  }, []); // eslint-disable-line

  useEffect(() => {
    loadLoans();
  }, [loadLoans]);

  return (
    <Container>
      <Title>
        <h1>Dashboard</h1>

        <div>
          <Button
            type="button"
            text={loading ? 'CARREGANDO...' : 'RECARREGAR'}
            icon={MdRefresh}
            onClick={loadLoans}
            disabled={loading}
          />
        </div>
      </Title>

      <Content>
        <Card title="MINHAS PRÓXIMAS PARCELAS">
          <Table>
            <thead>
              <tr>
                <th>VALOR</th>
                <th>PAGO</th>
                <th>DATA DE VENCIMENTO</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                </tr>
              ) : (
                installments.map(installment => (
                  <tr key={installment.dueDate}>
                    <td>{installment.formatedValue}</td>
                    <td>{installment.payd ? 'Pago 😍' : 'Não 😔'}</td>
                    <td>{installment.dueDate}</td>
                    <td>
                      <a href="https://provi.com.br/" target="__blank">
                        <ActionButton color="primary">
                          ver detalhes
                        </ActionButton>
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card>
        <Card title="VALOR DOS MEUS EMPRÉSTIMOS">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur neque cum, nemo natus autem! Debitis voluptatum
            molestiae ullam, fuga beatae eum quas dignissimos odit fugiat
            ratione nostrum itaque dolores!
          </p>
        </Card>
        <Card title="QUANTO EU JÁ PAGUEI">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur neque cum, nemo natus autem! Debitis voluptatum
            molestiae ullam, fuga beatae eum quas dignissimos odit fugiat
            ratione nostrum itaque dolores!
          </p>
        </Card>
        <Card title="MEUS JUROS">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur neque cum, nemo natus autem! Debitis voluptatum
            molestiae ullam, fuga beatae eum quas dignissimos odit fugiat
            ratione nostrum itaque dolores!
          </p>
        </Card>
      </Content>
    </Container>
  );
}
