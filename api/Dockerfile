FROM python:3.12

RUN useradd --create-home applyai
USER applyai

WORKDIR /home/applyai

RUN python -m venv venv
ENV PATH="/home/applyai/venv/bin:$PATH"

COPY --chown=applyai requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY --chown=applyai . .

EXPOSE 5000

CMD ["gunicorn", "--log-level", "debug", "-w", "4", "-b", "0.0.0.0:5000", "server:app"]
