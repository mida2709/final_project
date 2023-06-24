import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import Navbar from './Navbar';

const ViewProduct = () => {
  // Contoh data teknisi
  const [teknisiData, setTeknisiData] = useState([
    { id: 1, nama: 'Teknisi A', jenisLayanan: 'Service 1', harga: 100, deskripsi: 'Deskripsi A', alamat: 'Alamat A' },
    { id: 2, nama: 'Teknisi B', jenisLayanan: 'Service 2', harga: 200, deskripsi: 'Deskripsi B', alamat: 'Alamat B' },
    // ... tambahkan data teknisi lainnya sesuai kebutuhan
  ]);


  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const [editedId, setEditedId] = useState(null);
  const [editedNama, setEditedNama] = useState('');
  const [editedJenisLayanan, setEditedJenisLayanan] = useState('');
  const [editedHarga, setEditedHarga] = useState('');
  const [editedDeskripsi, setEditedDeskripsi] = useState('');
  const [editedAlamat, setEditedAlamat] = useState('');

  const handleDelete = (id) => {
    setDeletedId(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Implementasikan logika penghapusan data dengan ID tertentu
    const updatedTeknisiData = teknisiData.filter((teknisi) => teknisi.id !== deletedId);
    setTeknisiData(updatedTeknisiData);
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
  };

  const handleEdit = (id) => {
    const teknisi = teknisiData.find((teknisi) => teknisi.id === id);
    setEditedId(id);
    setEditedNama(teknisi.nama);
    setEditedJenisLayanan(teknisi.jenisLayanan);
    setEditedHarga(teknisi.harga);
    setEditedDeskripsi(teknisi.deskripsi);
    setEditedAlamat(teknisi.alamat);
    setEditDialogOpen(true);
  };

  const handleEditConfirm = () => {
    // Implementasikan logika pengeditan data dengan ID tertentu
    const updatedTeknisiData = teknisiData.map((teknisi) => {
      if (teknisi.id === editedId) {
        return {
          ...teknisi,
          nama: editedNama,
          jenisLayanan: editedJenisLayanan,
          harga: editedHarga,
          deskripsi: editedDeskripsi,
          alamat: editedAlamat,
        };
      }
      return teknisi;
    });
    setTeknisiData(updatedTeknisiData);
    setEditDialogOpen(false);
  };

  const handleEditCancel = () => {
    setEditDialogOpen(false);
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Selamat Datang, Admin!!</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '90px' }}>
        <Link to="/addProduct">
          <Button variant="contained" color="success" style={{ textTransform: 'none', fontSize: '12px', fontWeight: 'bold' }}>
            Tambah Layanan
          </Button>
        </Link>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>No</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Nama Teknisi</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Jenis Layanan</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Harga</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Deskripsi</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Alamat</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teknisiData.map((teknisi, index) => (
            <TableRow key={teknisi.id}>
              <TableCell style={{ fontWeight: 'bold' }}>{index + 1}</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>{teknisi.nama}</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>{teknisi.jenisLayanan}</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>{teknisi.harga}</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>{teknisi.deskripsi}</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>{teknisi.alamat}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(teknisi.id)}>
                  <Delete />
                </IconButton>
                <IconButton onClick={() => handleEdit(teknisi.id)}>
                  <Edit />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div
        style={{
          position: 'absolute',
          width: '1210px',
          height: '195px',
          top: '700px',
          bottom: 0,
          backgroundColor: '#EEEEEE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: '0 20px',
          textAlign: 'right',
          left: '0px'
        }}
      >
        <Typography variant="body1" color="text.secondary">
          ELECSOLUTIONS
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <span style={{ display: 'flex', alignItems: 'flex-end' }}>
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ marginLeft: '5px' }}>2023 Elecsolutions</span>
            </span>
          </span>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Elecsolutions
          <br />
          +1 897 6335 827
          <br />
          Jln. Jenderal Gatot Subroto Jakarta 10270
          <br />
          Gedung Nusantara III
        </Typography>
      </div>

      {/* Konfirmasi Hapus Dialog */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>HAPUS DATA?</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            jika data dihapus, tidak bisa dikembalikan
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Batal
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary" autoFocus>
            Hapus
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleEditCancel}>
        <DialogTitle>EDIT DATA TEKNISI</DialogTitle>
        <DialogContent>
          <TextField
            label="Nama Teknisi"
            fullWidth
            value={editedNama}
            onChange={(e) => setEditedNama(e.target.value)}
          />
          <Select
            labelId="jenis-layanan-select-label"
            id="jenis-layanan-select"
            value={editedJenisLayanan}
            onChange={(e) => setEditedJenisLayanan(e.target.value)}
            fullWidth
            style={{ marginTop: '10px' }}
          >
            <MenuItem value="Service 1">Service 1</MenuItem>
            <MenuItem value="Service 2">Service 2</MenuItem>
            <MenuItem value="Service 3">Service 3</MenuItem>
          </Select>
          <TextField
            label="Harga"
            fullWidth
            value={editedHarga}
            onChange={(e) => setEditedHarga(e.target.value)}
            style={{ marginTop: '10px' }}
          />
          <TextField
            label="Deskripsi"
            fullWidth
            value={editedDeskripsi}
            onChange={(e) => setEditedDeskripsi(e.target.value)}
            multiline
            rows={4}
            style={{ marginTop: '10px' }}
          />
          <TextField
            label="Alamat"
            fullWidth
            value={editedAlamat}
            onChange={(e) => setEditedAlamat(e.target.value)}
            style={{ marginTop: '10px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditCancel} color="secondary">
            Batal
          </Button>
          <Button onClick={handleEditConfirm} color="primary" autoFocus>
            Simpan
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewProduct;
