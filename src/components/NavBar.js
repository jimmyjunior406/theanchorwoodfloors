import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div>
			<nav className="static mx-auto bg-gray-200">
				<div className="py-3 px-6 flex justify-around text-gray-700">
					<img
						class="absolute m-11 left-0 max-w-lg max-h-20"
						src="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=88567d9fdf&attid=0.1&permmsgid=msg-f:1696333134789505065&th=178a95ff9fda7029&view=att&disp=safe&saddbat=ANGjdJ-rZ9v79M5amNrSAslpqVN0whW9PBMV0o0ceS9Hb1SPHFYUWlHupMF-2QlOAwDQEppikLG3NqSxWhsAjZLeT_Er3g5CAfENbj6vetpOGMTRXwHO_gkMaaQhoX3YP31LBd-TkXvop2kWc-gZ-H7pjWIbYSSNkokfjRsBLzsxPUxO77ZTeXXBsG9M-nkd-1XgSBdgZe7kUt5QuCZwg1joc6vtQgumYVXdqJusO4NVIP9okKpLzRkzOEcwg81m5pFiukMhBJW_pKZv3aXSLAtQaVd6egXiHrnGp0odVZdX9jgLXvlgqROrwn_lkChAtXHob6A_ceUQD0Mcx32PlI6HXr_1VwF65MSgiay-6vgBmRIj-XSacXbf_yNd9u1TakCcHkdlpNqIzTQuj2ag7VoOKYOe2LsvSZHm_W-KSn6vEOi0sgTx792Cs4Ezenr3L-PGqNTUMxylSP2wUn_cGTPVlBp2PGSPz38ciFDlw7TH3BObsMmyDb0H4tKEnWKkh6otv-cVL5RbbFJj3kPIXytAtLwGIseZePbQU9iagpGzpbnvSFhghhpGjMRC8lc9OJ2BHxGvebj-uqiDEDrphxtHEH_6Fn7OwW8Xrk7nsSPuCy3Z1QfGvKrHRUC9O-e3SeizOW9kJTGExWuSXQVvSuNKVXhYpf8ksG07ziOV6N62kMrrUO9Ti9G0IflHEwA"
					></img>
					603-598-2332
					{props.routes.map(({ key, path }) => (
						<Link key={key} to={path}>
							{key}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
